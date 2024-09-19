import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });

  it('should return the number itself if the input is a single number', () => {
    expect(service.add('1')).toBe(1);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(service.add('1,2')).toBe(3);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    expect(service.add('1,2,3,4')).toBe(10);
  });

  it('should handle newlines between numbers', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  it('should handle different delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.add('1,-2')).toThrowError(
      'negative numbers not allowed -2'
    );
  });

  it('should throw an error for multiple negative numbers', () => {
    expect(() => service.add('1,-2,-3')).toThrowError(
      'negative numbers not allowed -2,-3'
    );
  });
});
