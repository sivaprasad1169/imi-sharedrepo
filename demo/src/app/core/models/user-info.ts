export interface UserInfo extends User {
  isActive: boolean;
  isVerified: string;
  title: string;
  fName: string;
  lName: string;
  userType: string;
  address: string;
  privileges: any[];
}

export interface User {
  loginId: string;
  password: string;
}

