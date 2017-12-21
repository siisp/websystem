#ifndef POSITIONDATA_H_
#define POSITIONDATA_H_

#include "Record.h"
#include "PositionDataFieldType.h"
#include <string>

using std::string;


class PositionData {
private:
	Record* record;
public:
	PositionData(Record * record);
	string GetFieldValue(PositionDataFieldType field);
	virtual ~PositionData();
};

#endif
