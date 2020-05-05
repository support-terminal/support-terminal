import JoinRequest from './JoinRequest';
import NotificationApiType from './NotificationApiType';

export default class NotificationApi {
  id: string;
  label: string;
  state: string;
  type: string;
  joinRequests: JoinRequest[];
}
