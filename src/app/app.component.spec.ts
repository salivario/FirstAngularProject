
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let app: AppComponent
  beforeEach(()=>{
    app = new AppComponent()
  })

  it('may create class instance',()=>{
    expect(app).toBeTruthy
  })
  
});