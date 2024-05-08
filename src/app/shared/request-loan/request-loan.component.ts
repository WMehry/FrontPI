import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OfferLoan } from 'src/app/Models/Loan/offer-loan';
import { RequestLoan } from 'src/app/Models/Loan/request-loan';
import { User } from 'src/app/Models/user/user';
import { OfferLoanService } from 'src/app/services/offer-loan.service';
import { RequestLoanService } from 'src/app/services/request-loan.service';

@Component({
  selector: 'app-request-loan',
  templateUrl: './request-loan.component.html',
  styleUrls: ['./request-loan.component.css']
})
export class RequestLoanComponent implements OnInit{
  
  reqForm!:FormGroup;
  requestLoan!:RequestLoan;
  user!:User;
  @Input() offerLoan!: OfferLoan;
  @Output() selectedOfferId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private offerServ: OfferLoanService,
              private requestServ: RequestLoanService,
              private fb: FormBuilder,
              private actR:ActivatedRoute){}
  
  ngOnInit(): void {
    
    const id = Number(this.actR.snapshot.paramMap.get('id'));
    console.log('Param ID:', id);

    this.offerServ.retrieveOfferLoan(id).subscribe(
      (selectedOffer: OfferLoan) => {
        console.log('Selected Offer Loan:', selectedOffer);
        this.offerLoan = selectedOffer;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }
 
  getCurrentDate(): string {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substring(0, 10); 
    return formattedDate;
  }

  addRequest(){
    
  }
  
  
  get reqDate(){ return this. reqForm.get('reqDate');}
  get typeAmrt(){ return this. reqForm.get('typeAmrt');}
  get loanAmnt(){ return this. reqForm.get('loanAmnt');}
  get nbrMonth(){ return this. reqForm.get('periode');}
  get nbrYears(){ return this. reqForm.get('periode');}

  /* 
  
  this is my entity
import { OfferLoan } from './offer-loan';
import { Amortization } from './amortization';

export class RequestLoan{
  requestId!: number;
  reqDate!: Date;
  loanAmnt!: number;
  nbrMonth!: number;
  nbrYears!: number;
  garantorFile!: any;
  fileName!: string;
  status!: StatLoan;
  typeAmrt!: TypeAmort;
  offerLoan?: OfferLoan;
  amortization?: Amortization;
}

export enum TypeAmort {
  CONST_ANNUITY = 'CONST_ANNUITY',
  CONST_AMORTIZATION = 'CONST_AMORTIZATION',
  LOAN_PER_BLOC = 'LOAN_PER_BLOC',
  CONST_MONTHLY = 'CONST_MONTHLY',
}

export enum StatLoan {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}
  */
 


  
  

  

}
