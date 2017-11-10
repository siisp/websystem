#include "FormationData.h"
#include "FormationDataFieldType.h"
#include <string>

using std::string;

FormationData::FormationData(Record * record) {
	this->record=record;
}

string FormationData::GetFieldValue(FormationDataFieldType field){
	return this->record->GetField(field);
}


FormationData::~FormationData() {
}

