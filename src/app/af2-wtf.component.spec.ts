import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Af2WtfAppComponent } from '../app/af2-wtf.component';

beforeEachProviders(() => [Af2WtfAppComponent]);

describe('App: Af2Wtf', () => {
  it('should create the app',
      inject([Af2WtfAppComponent], (app: Af2WtfAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'af2-wtf works!\'',
      inject([Af2WtfAppComponent], (app: Af2WtfAppComponent) => {
    expect(app.title).toEqual('af2-wtf works!');
  }));
});
