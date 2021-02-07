import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

export default async (
  data: {
    orgId: string;
    projectId: string;
    ignoreId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId, ignoreId } = data;
  const endpoint = getUrl.deleteIgnore(orgId, projectId, ignoreId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
