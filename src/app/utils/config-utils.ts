import { ADMIN_URL, APPROVAL_PENDING_URL, HOME_URL, MEMBER_URL } from "../constants";
import { UserType } from "../models/enums";


export class ConfigUtil {
static getRedirectUrl(type: UserType): string {
  let redirectUrl = '';   
  switch (type) {
    case UserType.NEW:
      redirectUrl = HOME_URL;
      break;
    case UserType.MEMBER:
      redirectUrl = MEMBER_URL;
      break;
    case UserType.ADMIN:
      redirectUrl = ADMIN_URL;
      break;
    case UserType.APPROVAL_PENDING:
      redirectUrl = APPROVAL_PENDING_URL;
      break;
  }
  return redirectUrl;
}
}