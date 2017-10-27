#ifndef PERSONALDATA_H_
#define PERSONALDATA_H_

#include "Record.h"
#include <string>
#include "PersonalDataFieldType.h"

using std::string;

class PersonalData {
private:
	Record * record;
public:
	PersonalData(Record * record);
	string GetFieldValue(PersonalDataFieldType field);
	virtual ~PersonalData();
};

#endif
