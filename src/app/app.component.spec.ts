import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PhonenumberPipe } from './phonenumber.pipe';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhonenumberPipe
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pipes-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pipes-unit-testing');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to PIPES-UNIT-TESTING!');
  });

  it('should render name in titlecase', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // get the name's input and display elements from the DOM
    const bannerDe: DebugElement = fixture.debugElement;

    const nameDisplay = bannerDe.query(By.css('.name'));
    const nameDisplayEle: HTMLElement = nameDisplay.nativeElement;

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(nameDisplayEle.textContent).toBe('Curious George');
  });

  it('should render phonenumber in specific format', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // get the name's input and display elements from the DOM
    const bannerDe: DebugElement = fixture.debugElement;

    const numberDisplay = bannerDe.query(By.css('.number'));
    const numberDisplayEle: HTMLElement = numberDisplay.nativeElement;

    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();

    expect(numberDisplayEle.textContent.trim()).toBe('(333) 333 3333');
  });



  it('should display default persons in json fromat', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // get the name's input and display elements from the DOM
    const bannerDe: DebugElement = fixture.debugElement;

    const personsHolder = bannerDe.query(By.css('p'));
    const personsEle: HTMLElement = personsHolder.nativeElement;

     // Tell Angular to update the display binding through the title pipe
     fixture.detectChanges();

    const persons = [
      {firstName: 'first0', lastName: 'last0'},
      {firstName: 'first1', lastName: 'last2'},
      {firstName: 'first2', lastName: 'last3'},
      {firstName: 'first3', lastName: 'last4'}
    ];

     expect(personsEle.textContent).toMatch(JSON.stringify(persons));
  });

});
