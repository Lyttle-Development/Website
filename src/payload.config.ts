// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './components/Footer/config'
import { Header } from './components/Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES, WEBSITE_NAME } from 'constrants'
import { AcceptedLanguages, SupportedLanguages } from '@payloadcms/translations'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  collections: [Pages, Posts, Media, Categories, Users],
  globals: [Header, Footer],
  i18n: {
    fallbackLanguage: DEFAULT_LOCALE.code as AcceptedLanguages,
    supportedLanguages: { ...SUPPORTED_LANGUAGES.map((l) => l.payload) } as SupportedLanguages,
  },
  localization: {
    locales: [
      ...SUPPORTED_LANGUAGES.map((l) => ({
        code: l.code,
        label: l.label,
        fallbackLocale: DEFAULT_LOCALE.code,
      })),
    ],
    defaultLocale: DEFAULT_LOCALE.code,
    fallback: true,
  },
  admin: {
    meta: {
      titleSuffix: '| ' + WEBSITE_NAME,
      icons: {
        icon: '/favicon.ico',
      },
    },
    components: {
      beforeLogin: [],
      beforeDashboard: [],
      graphics: {
        Logo: '@/graphics/Logo',
        Icon: '@/graphics/Favicon',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: {
        rejectUnauthorized: false,
      },
      max: 5, // maximum number of clients in the pool
    },
  }),
  cors: [getServerSideURL()].filter(Boolean),
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
  email:
    process.env.EMAIL_ADDRESS &&
    process.env.EMAIL_NAME &&
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
      ? nodemailerAdapter({
          defaultFromAddress: process.env.EMAIL_ADDRESS || '',
          defaultFromName: process.env.EMAIL_NAME || '',
          // Nodemailer transportOptions
          transportOptions: {
            host: process.env.SMTP_HOST,
            port: 587,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          },
        })
      : undefined,
})
