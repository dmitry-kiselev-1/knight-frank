ALTER USER postgres PASSWORD 'password';

/*
drop index IX_Apartment_ID;
drop table Apartment;
drop index IX_Building_ID;
drop table Building;
*/

/*==============================================================*/
/* Table: Apartment                                             */
/*==============================================================*/
create table Apartment (
   ID                   INT8                 not null,
   Building_ID          INT8                 not null,
   Size                 INT2                 not null,
   constraint PK_APARTMENT primary key (ID)
);

CREATE SEQUENCE SEQ_Apartment_ID
    START 1
    OWNED BY Apartment.ID;

/*==============================================================*/
/* Index: IX_Apartment_ID                                       */
/*==============================================================*/
create unique index IX_Apartment_ID on Apartment (ID);

/*==============================================================*/
/* Table: Building                                              */
/*==============================================================*/
create table Building (
   ID                   INT8                 not null,
   Address              VARCHAR(1024)        not null,
   constraint PK_BUILDING primary key (ID)
);

CREATE SEQUENCE SEQ_Building_ID
    START 1
    OWNED BY Building.ID;

/*==============================================================*/
/* Index: IX_Building_ID                                        */
/*==============================================================*/
create unique index IX_Building_ID on Building (ID);

/*==============================================================*/
/* Constraint: FK_Apartment_Building                                        */
/*==============================================================*/
alter table Apartment
   add constraint FK_Apartment_Building foreign key (Building_ID)
      references Building (ID)
      on delete restrict on update restrict;


