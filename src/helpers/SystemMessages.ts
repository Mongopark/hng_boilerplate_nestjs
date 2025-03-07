export const USER_CREATED_SUCCESSFULLY = 'User Created Successfully';
export const USER_CREATED = 'User Created Successfully';
export const FAILED_TO_CREATE_USER = 'Error Occured while creating user, kindly try again';
export const ERROR_OCCURED = 'Error Occured Performing this request';
export const USER_ACCOUNT_EXIST = 'Account with the specified email exists';
export const USER_ACCOUNT_DOES_NOT_EXIST = "Account with the specified email doesn't exist";
export const UNAUTHENTICATED_MESSAGE = 'User is currently unauthorized, kindly authenticate to continue';
export const TWO_FACTOR_VERIFIED_SUCCESSFULLY = '2FA verified and enabled';
export const ANALYTICS_FETCHED_SUCCESSFULLY = 'Admin Analytics fetched successfully';
export const DASHBOARD_FETCHED_SUCCESSFULLY = 'Admin Dashboard retrieved successfully';
export const INCORRECT_TOTP_CODE = 'Incorrect totp code';
export const USER_NOT_ENABLED_2FA = 'Two factor Auth not initiated. Visit api/auth/2fa/enable';
export const USER_NOT_FOUND = 'User not found!';
export const TOTAL_PRODUCTS_FETCHED_SUCCESSFULLY = 'Total Products fetched successfully';
export const INVALID_PASSWORD = 'Invalid password';
export const TWO_FA_INITIATED = '2FA setup initiated';
export const TWO_FA_ENABLED = '2FA is already enabled';
export const BAD_REQUEST = 'Bad Request';
export const LANGUAGE_CREATED_SUCCESSFULLY = 'Language Created Successfully';
export const OK = 'Success';
export const LANGUAGE_ALREADY_EXISTS = 'Language already exits';
export const WORK_IN_PROGRESS = 'Work in progress';
export const FETCH_LANGUAGE_FAILURE = 'Failed to fetch language';
export const UNAUTHORISED_TOKEN = 'Invalid token or email';
export const TIMEZONE_CREATED_SUCCESSFULLY = 'Timezone created Successfully';
export const FETCH_TIMEZONE_FAILURE = 'Error Occured while creating Timezone, kindly try again';
export const SUCCESS = 'Timezone fetched successfully';
export const TIMEZONE_ALREADY_EXISTS = 'Timezone already exists';
export const INVALID_CREDENTIALS = 'Invalid credentials';
export const LOGIN_SUCCESSFUL = 'Login successful';
export const LOGIN_ERROR = 'An error occurred during login';
export const EMAIL_SENT = 'Email sent successfully';
export const ENABLE_2FA_ERROR = 'Error occured enabling 2fa';
export const ALREADY_ENABLED_2FA = '2FA already enabled on your account';
export const SIGN_IN_OTP_SENT = 'Sign-in token sent to email';
export const WRONG_PARAMETERS =
  'permission_list must be an object with keys from PermissionCategory and boolean values';
export const INVALID_ADMIN_SECRET = 'Invalid access secret';
export const ADMIN_CREATED = 'Admin Created Successfully';
export const SERVER_ERROR = 'Sorry a server error occured';
export const FORBIDDEN_ACTION = 'You dont have the permission to perform this action';
export const ORG_NOT_FOUND = 'Organisation not found';
export const NOT_ORG_OWNER = 'You do not have permission to update this organisation';
export const PASSWORD_UPDATED = 'Password updated successfully';
export const REQUEST_SUCCESSFUL = 'Request completed successfully';
export const PAYMENT_NOTFOUND = 'Payment plan not found';
export const PRODUCT_NOT_FOUND = 'Product not found!';
export const COMMENT_CREATED = 'Comment added successfully';
export const ORG_UPDATE = 'Organisation updated successfully';
export const ORG_MEMBER_NOT_FOUND = 'Member not found';
export const ORG_MEMBER_DOES_NOT_BELONG = 'Member does not belong to the specified organisation';
export const ROLE_NOT_FOUND = 'Role not found in the organization';
export const BLOG_FETCHED_SUCCESSFUL = 'Blog fetched successfully';
export const BLOG_NOT_FOUND = 'Blog not found';
export const JOB_NOT_FOUND = 'Job not found';
export const JOB_DELETION_SUCCESSFUL = 'Job details deleted successfully';
export const JOB_LISTING_RETRIEVAL_SUCCESSFUL = 'Jobs listing fetched successfully';
export const JOB_CREATION_SUCCESSFUL = 'Job listing created successfully';
export const NO_USER_ORGS = 'User has no organisations';
export const DEADLINE_PASSED = 'Job application deadline passed';
export const EMAIL_TEMPLATES = {
  TEMPLATE_UPDATED_SUCCESSFULLY: 'Template updated successfully',
  INVALID_HTML_FORMAT: 'Invalid HTML format',
  TEMPLATE_NOT_FOUND: 'Template not found',
};
export const EXISTING_ROLE = 'A role with this name already exists in the organisation';
export const ROLE_CREATION_FAILED = 'Failed to create organisation role';
export const ROLE_FETCHED_SUCCESSFULLY = 'Roles fetched successfully';
export const ROLE_CREATED_SUCCESSFULLY = 'Role created successfully';

export const RESOURCE_NOT_FOUND = resource => {
  return `${resource} does not exist`;
};
export const INVALID_UUID_FORMAT = 'Invalid UUID format';
export const MEMBER_ALREADY_EXISTS = 'User already added to organization';
export const MEMBER_ALREADY_SUCCESSFULLY = 'Member added successfully';
export const MEMBER_NOT_ADDED = 'Failed to add member to the organisation';
export const USER_NOT_REGISTERED = 'User not found, register to continue';
export const CATEGORY_NOT_FOUND = 'Organization category not found';
export const INVITE_ACCEPTED = 'Invite already accepted';
export const INVALID_INVITE = 'Invalid invite link';
export const INVITE_NOT_FOUND = 'Invite link not found';
export const BLOG_DELETED = 'Blog post has been successfully deleted';
export const NO_USER_TESTIMONIALS = 'User has no testimonials';
export const USER_TESTIMONIALS_FETCHED = 'User testimonials retrieved successfully';
export const INVALID_ORG_ID = 'Provide a valid organization Id';
export const INVALID_USER_ID = 'Provide a valid user Id';
export const INVALID_PRODUCT_ID = 'Provide a valid user Id';
export const REVENUE_FETCHED_SUCCESSFULLY = 'Revenue Fetched';
export const QUESTION_ALREADY_EXISTS = 'This question already exists.';
export const ROLE_ALREADY_EXISTS = 'A role with this name already exists in the organisation';
export const NO_FILE_FOUND = 'No file uploaded.';
export const PROFILE_NOT_FOUND = 'Profile not found';
export const PROFILE_PIC_ERROR = 'Error deleting previous profile picture:';
export const PROFILE_PIC_NOT_FOUND = 'Previous profile picture pic not found';
export const ERROR_DIRECTORY = 'Error creating uploads directory:';
export const DIRECTORY_CREATED = 'Uploads directory created at:';
export const PICTURE_UPDATED = 'Profile picture updated successfully';
export const FILE_SAVE_ERROR = 'Error saving file to disk';
export const FILE_EXCEEDS_SIZE = resource => {
  return `File size exceeds ${resource} MB limit`
  
};
export const INVALID_FILE_TYPE = resource => {
  return `Invalid file type. Allowed types: ${resource}`;
  
};