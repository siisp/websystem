#include "PositionData.h"
#include "PositionDataFieldType.h"
#include <string>

using std::string;

PositionData::PositionData(Record * record) {
	this->record=record;
}

string PositionData::GetFieldValue(PositionDataFieldType field){
	return this->record->GetField(field);
}

PositionData::~PositionData() {
}

