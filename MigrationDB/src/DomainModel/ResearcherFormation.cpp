#include "ResearcherFormation.h"
#include <string>
#include "IdGenerator.h"
using std::string;

ResearcherFormation::ResearcherFormation() {
}

void ResearcherFormation::SetAcademicDegree(string academicDegree){
	this->academicDegree = academicDegree;
}
string ResearcherFormation::GetAcademicDegree()const{
	return this->academicDegree;
}
void ResearcherFormation::SetCarrer(string carrer){
	this->carrer = carrer;
}
string ResearcherFormation::GetCarrer()const{
	return this->carrer;
}
void ResearcherFormation::SetDegreeArea(string degreeArea){
	this->degreeArea = degreeArea;
}
string ResearcherFormation::GetDegreeArea()const{
	return this->degreeArea;
}
void ResearcherFormation::SetFormationComplete(bool formationCompleted){
	this->formationCompleted = formationCompleted;
}
bool ResearcherFormation::GetFormationComplete()const{
	return this->formationCompleted;
}
void ResearcherFormation::SetType(string type){
	this->type = type;
}
string ResearcherFormation::GetType()const{
	return this->type;
}
void ResearcherFormation::SetUniversity(string university){
	this->university = university;
}
string ResearcherFormation::GetUniversity()const{
	return this->university;
}

ResearcherFormation::~ResearcherFormation() {
}

