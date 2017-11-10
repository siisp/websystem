#include "PersonalData.h"
#include "PersonalDataFieldType.h"
#include <string>

using std::string;

PersonalData::PersonalData(Record * record) {
	this->record=record;
}

string PersonalData::GetFieldValue(PersonalDataFieldType field){
	return this->record->GetField(field);
}

PersonalData::~PersonalData() {
}

