import config from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: Request to fetch Snyk orgs notification settings
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-organization-notification-settings/get-org-notification-settings
 * @param orgId Organization ID for org which you want the notification settings for
 * @param opts opts Options to override configs such as API token(Optional)
 */
export default async function getOrgNotificationSettings(
  data: { orgId: string },
  opts: ReqOpts = {},
): Promise<ReturnData> {
  const { orgId } = data;
  const endpoint = config.getOrgNotiSettings(orgId);
  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
