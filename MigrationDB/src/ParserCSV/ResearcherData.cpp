#include "ResearcherData.h"
#include "FormationData.h"
#include "PersonalData.h"
#include "PositionData.h"

ResearcherData::ResearcherData(){
}
FormationData* ResearcherData::getFormationData() const{
	return this->formationData;
}
void ResearcherData::setFormationData(FormationData* formationData){
	this->formationData = formationData;
}
PersonalData* ResearcherData::getPersonalData() const{
	return this->personalData;
}
void ResearcherData::setPersonalData(PersonalData* personalData){
	this->personalData = personalData;
}
PositionData* ResearcherData::getPositionData() const{
	return this->positionData;
}
void ResearcherData::setPositionData(PositionData* positionData){
	this->positionData = positionData;
}
ResearcherData::~ResearcherData() {
}
