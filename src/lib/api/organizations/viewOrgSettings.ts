import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * GET: Organization setting for a Snyk org
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/organization-settings/view-organization-settings
 */
export default async (data: { orgId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.viewOrgSettings(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
