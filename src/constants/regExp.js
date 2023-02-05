export const EMAIL_FORM =
	/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
export const PASSWORD_REGEXP =
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
export const DNI_REGEXP = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/g;
