#ifndef FORMATIONDATA_H_
#define FORMATIONDATA_H_

#include "Record.h"
#include <string>
#include "FormationDataFieldType.h"

using std::string;

class FormationData {
private:
	Record * record;
public:
	FormationData(Record* record);
	string GetFieldValue(FormationDataFieldType field);
	virtual ~FormationData();
};

#endif
