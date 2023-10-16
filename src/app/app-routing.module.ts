import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ManageStopComponent } from './components/manage-stop/manage-stop.component';
import { ManageExploreComponent } from './components/manage-explore/manage-explore.component';
import { ManageHelplineComponent } from './components/manage-helpline/manage-helpline.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'dashboard/upload-files', component: FileuploadComponent },
  { path: 'dashboard/manage-stops', component: ManageStopComponent },
  { path: 'dashboard/manage-explore', component: ManageExploreComponent },
  { path: 'dashboard/manage-helpline', component: ManageHelplineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
