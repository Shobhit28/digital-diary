import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BranchDetailsComponent } from "./branch-details/branch-details.component";
import { MemberlistComponent } from "./member-list/member-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  
  declarations: [
    MemberlistComponent,
    BranchDetailsComponent
  ],

})
export class AppCommonModule { }