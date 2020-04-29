import { Component, OnInit } from '@angular/core';
import { QuoteService, Quote } from '../quote.service'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private quoteSvc: QuoteService) { }

  ngOnInit(): void {
    this.quoteSvc.getQuotes()
    .subscribe(quote => this.lastQuote = quote)
  }

  lastQuote: Quote;
}
