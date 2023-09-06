import { compute } from './compute';
describe('compute', () => {

  it('should return 0 if it is negative', () => {
    let test = compute(-99);
    console.log('should return 0 if input is negative');
    expect(test).toBe(1);
  });

  it('should increament the input if it is positive', () => {
   let test= compute(1);
    console.log('should increament the input if it is positive');
    expect(test).toBe(2);
  });

});
