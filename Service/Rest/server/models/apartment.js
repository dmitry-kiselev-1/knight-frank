'use strict';

module.exports = function(Apartment) {
  /* Execute raw query on Loopback Connector and including them to REST api */
  /*
      /api/apartments/forBuilding?buildingid=66
  */
  Apartment.forBuilding = function(buildingid, cb) {
    var ds = Apartment.dataSource;

    // eslint-disable-next-line max-len
    var sql = 'SELECT * FROM apartment WHERE building_id=$1';

    var params = []; params.push(buildingid);

    ds.connector.query(sql, params, function(err, apartments) {
      if (err) console.error(err);
      cb(err, apartments);
    });
  };

  Apartment.remoteMethod('forBuilding',
    {
      http: {verb: 'get'},
      description: 'Get list of Apartment for Building',
      accepts: {arg: 'buildingid', type: 'number'},
      returns: {arg: 'data', type: ['Apartment'], root: true},
    }
  );
};
