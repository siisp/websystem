#include "PersonalDataMapper.h"
#include "../DomainModel/Researcher.h"
#include "../ParserCSV/ResearcherData.h"
#include "../ParserCSV/PersonalDataFieldType.h"
#include <stdlib.h>

PersonalDataMapper::PersonalDataMapper() {
}

string Remove(string source,char toFind){
	if(source.find(toFind)==string::npos)return source;
	return Remove(source.replace(source.find(toFind),1,0),toFind);
}

string cleanDNI(string DNI){
	return Remove(Remove(DNI,'.'),',');
}

void PersonalDataMapper::Map(const ResearcherData* researcherData,Researcher* researcher){
	string dni = researcherData->getPersonalData()->GetFieldValue(DNI);
	if(dni=="")
	{
		dni = "0";
	}
	researcher->SetName(researcherData->getPersonalData()->GetFieldValue(Nombre));
	researcher->SetCuilCuit(researcherData->getPersonalData()->GetFieldValue(CUIT_CUIL));
	researcher->SetDni(dni);
	researcher->SetEmail(researcherData->getPersonalData()->GetFieldValue(CORREO_ELECTRONICO));
	researcher->SetGender(researcherData->getPersonalData()->GetFieldValue(GENERO));
	researcher->SetSurname(researcherData->getPersonalData()->GetFieldValue(Apellido));
}


PersonalDataMapper::~PersonalDataMapper() {
}

