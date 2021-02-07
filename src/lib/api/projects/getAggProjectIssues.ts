import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/aggregated-project-issues/list-all-aggregated-issues
 * @param orgId Snyk organization ID
 * @param projectId Snyk project ID
 * @param opts options to pass data such as request body and API token
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.getAggIssues(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
