import JoinRequest from './JoinRequest';

export default class NotificationApi {
  id: string;
  label: string;
  state: string;
  type: string;
  joinRequests: JoinRequest[];
}
