import JoinRequest from "./JoinRequest";

export default class Bot {
  id: string;
  label: string;
  state: string;
  joinRequests: JoinRequest[];
}
