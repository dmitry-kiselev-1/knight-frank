'use strict';

module.exports = function(Building) {
  /* Execute raw query on Loopback Connector and including them to REST api */
  /*
    /api/buildings/apartmentCount
  */
  Building.apartmentCount = function(cb) {
    var ds = Building.dataSource;

    // eslint-disable-next-line max-len
    var sql = 'SELECT b.id, b.address, COUNT(a.id) apartmentCount FROM building b LEFT JOIN apartment a on b.id = a.Building_ID GROUP BY b.id, b.address ORDER BY b.id';

    ds.connector.query(sql, function(err, buildings) {
      if (err) console.error(err);
      cb(err, buildings);
    });
  };

  Building.remoteMethod('apartmentCount',
    {
      http: {verb: 'get'},
      description: 'Get list of Building with Apartments count',
      returns: {arg: 'data', type: ['Building'], root: true},
    }
  );
};
