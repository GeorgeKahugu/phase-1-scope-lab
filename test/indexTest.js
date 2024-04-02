require ( './helpers.js' );

describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });
  describe('setBestCustomer()', function() {
    it('setBestCustomer', function() {
      expect(window.setBestCustomer).to.equal(undefined);

      setBestCustomer();

      expect(window.setBestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function() {
    it('overwrites the best customer', function() {
      overwriteBestCustomer('maybe bob');

      expect(window.setBestCustomer).to.equal('maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});
