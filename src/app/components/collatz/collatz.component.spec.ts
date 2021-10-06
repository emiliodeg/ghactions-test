import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollatzComponent } from './collatz.component';

describe('CollatzComponent', () => {
  let component: CollatzComponent;

  beforeEach(() => {
    component = new CollatzComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('secuency', () => {
    it('should NOT get values with 0', () => {
      component.initialValue = 0;

      expect(component.secuency.length).toEqual(0);
    });

    it('should get only 1 for 1', () => {
      component.initialValue = 1;

      expect(component.secuency.length).toEqual(1);
      expect(component.secuency).toEqual([1]);
    });

    it('should get same result for negatives input', () => {
      component.initialValue = 10;
      const expected = component.secuency;

      component.initialValue = -10;
      expect(component.secuency).toEqual(expected);
    });

    it('should last element equal to 1 with huge input', () => {
      component.initialValue = 99999;

      expect(component.secuency.pop()).toEqual(1);
    });
  });
});
