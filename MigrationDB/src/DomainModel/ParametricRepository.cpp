#include "ParametricRepository.h"

ParametricRepository::ParametricRepository() {
}

std::list<Parametric> ParametricRepository::GetUniversities()const{
	return this->universities;
}
std::list<Parametric> ParametricRepository::GetTypeOfRecruitment()const{
	return this->typeOfRecruitment;
}
std::list<Parametric> ParametricRepository::GetSecretaryshipDepartment()const{
	return this->secretaryshipDepartment;
}
std::list<Parametric> ParametricRepository::GetPositionType()const{
	return this->positionType;
}
std::list<Parametric> ParametricRepository::GetModality()const{
	return this->modality;
}
std::list<Parametric> ParametricRepository::GetIdDedication()const{
	return this->idDedication;
}
std::list<Parametric> ParametricRepository::GetDegreeArea()const{
	return this->degreeArea;
}
std::list<Parametric> ParametricRepository::GetAcademicDegree()const{
	return this->academicDegree;
}

ParametricRepository::~ParametricRepository() {
}
