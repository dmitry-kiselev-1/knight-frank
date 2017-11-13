DO
$$
BEGIN
	FOR building IN 1..10 LOOP
		insert into Building (ID, Address) values (nextval('SEQ_Building_ID'), concat('Address ', currval('SEQ_Building_ID')));
		
        FOR apartment IN 1..(random()*(10-1)+1) LOOP
        	insert into Apartment (ID, Building_ID, Size) values (nextval('SEQ_Apartment_ID'), currval('SEQ_Building_ID'), apartment * 100);
    	END LOOP;
	END LOOP;
END
$$ language plpgsql;

/*
SELECT * FROM Apartment;
SELECT * FROM Building;
DELETE FROM Apartment;
DELETE FROM Building;
*/