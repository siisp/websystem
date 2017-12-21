#include "PersonalDataMapper.h"
#include "Researcher.h"
#include "ResearcherData.h"
#include "PersonalDataFieldType.h"
#include <stdlib.h>

PersonalDataMapper::PersonalDataMapper() {
}

void PersonalDataMapper::Map(ResearcherData* researcherData, Researcher* researcher){
	int dni= atoi ((char*)researcherData->getPersonalData()->GetFieldValue(DNI));
	researcher->SetName(researcherData->getPersonalData()->GetFieldValue(Nombre));
	researcher->SetCuilCuit(researcherData->getPersonalData()->GetFieldValue(CUIT_CUIL));
	researcher->SetDni(dni);
	researcher->SetEmail(researcherData->getPersonalData()->GetFieldValue(CORREO_ELECTRONICO));
	researcher->SetGender(researcherData->getPersonalData()->GetFieldValue(GENERO));
	researcher->SetSurname(researcherData->getPersonalData()->GetFieldValue(Apellido));
}


PersonalDataMapper::~PersonalDataMapper() {
}

