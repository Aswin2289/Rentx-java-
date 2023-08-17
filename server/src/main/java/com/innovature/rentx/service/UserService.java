package com.innovature.rentx.service;

import com.innovature.rentx.exception.BadRequestException;
import com.innovature.rentx.form.*;
import com.innovature.rentx.view.*;

import java.io.IOException;
import java.security.GeneralSecurityException;
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;

public interface UserService {

    RefreshTokenView refresh(RefreshTokenForm form) throws BadRequestException;

    UserView currentUser();

    TestViewOtp add(UserForm form, Byte userRole);

    UserView googleAuth(GoogleSignInForm form, Byte userRole)
            throws BadRequestException, GeneralSecurityException, IOException;

    LoginView login(LoginForm form) throws BadRequestException;

    ResponseEntity<String> verify(@Valid OtpForm form);

    VendorRegStage1View vendorRegStage1(VendorRegStage1Form form);

    VendorOtpView verifyVendorOtp(@Valid OtpForm form);

    TestViewOtp forgetPasswordEmail(EmailForm form) throws BadRequestException;

    EmailTokenView forgetVerify(@Valid OtpForm form);

    ResponseEntity<String> changePassword(@Valid ChangePasswordForm form);

    // resend otp
    TestViewOtp resend(@Valid ResendOtpForm form, Integer forgetValue);

    ResponseEntity<String> UserChangePassword(@Valid UserChangePasswordForm form);

    AdminVendorView userDetailView();

    ResponseEntity<String> updateProfile(ProfileEditForm form, byte role);

}
