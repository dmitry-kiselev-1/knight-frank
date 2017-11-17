#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

ALTER USER postgres
	PASSWORD 'password';

create table Apartment (
   ID                   INT8                 not null,
   Building_ID          INT8                 not null,
   Size                 INT2                 not null,
   constraint PK_APARTMENT primary key (ID)
);

CREATE SEQUENCE SEQ_Apartment_ID
    START 1
    OWNED BY Apartment.ID;

create unique index IX_Apartment_ID on Apartment (ID);

create table Building (
   ID                   INT8                 not null,
   Address              VARCHAR(1024)        not null,
   constraint PK_BUILDING primary key (ID)
);

CREATE SEQUENCE SEQ_Building_ID
    START 1
    OWNED BY Building.ID;

create unique index IX_Building_ID on Building (ID);

alter table Apartment
   add constraint FK_Apartment_Building foreign key (Building_ID)
      references Building (ID)
      on delete restrict on update restrict;

BEGIN
	FOR building IN 1..10 LOOP
		insert into Building (ID, Address) values (nextval('SEQ_Building_ID'), concat('Address ', currval('SEQ_Building_ID')));
		
        	FOR apartment IN 1..(random()*(10-1)+1) LOOP
        		insert into Apartment (ID, Building_ID, Size) values (nextval('SEQ_Apartment_ID'), currval('SEQ_Building_ID'), apartment * 100);
	    	END LOOP;
	END LOOP;
END

EOSQL

