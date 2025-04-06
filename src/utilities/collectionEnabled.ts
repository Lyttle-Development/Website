import { Access, AccessArgs, AccessResult } from 'payload'

export function collectionEnabled(
  enabled: boolean,
  check: Access | undefined,
  args: AccessArgs,
): AccessResult | Promise<AccessResult> {
  if (enabled && check) {
    return check(args)
  }

  return false
}
