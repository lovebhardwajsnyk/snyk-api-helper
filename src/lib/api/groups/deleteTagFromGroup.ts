import getUrl from '../../utils/getUrl';
import isObjectEmpty from '../../utils/isObjectEmpty';
import processRequest from '../../utils/processRequest';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (data: { groupId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { groupId } = data;
  const endpoint = getUrl.deleteTagFromGroup(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
