#include "ResearcherPosition.h"
#include <string>

using std::string;

ResearcherPosition::ResearcherPosition() {
}

string ResearcherPosition::getCareer() const {
	return career;
}

void ResearcherPosition::setCareer(string career) {
	this->career = career;
}

string ResearcherPosition::getIdDedication() const {
	return idDedication;
}

void ResearcherPosition::setIdDedication(string idDedication) {
	this->idDedication = idDedication;
}

string ResearcherPosition::getLicense() const {
	return license;
}

void ResearcherPosition::setLicense(string license) {
	this->license = license;
}

string ResearcherPosition::getModality() const {
	return modality;
}

void ResearcherPosition::setModality(string modality) {
	this->modality = modality;
}

string ResearcherPosition::getPositionType() const {
	return positionType;
}

void ResearcherPosition::setPositionType(string positionType) {
	this->positionType = positionType;
}

string ResearcherPosition::getSecretaryshipDepartment() const {
	return secretaryshipDepartment;
}

void ResearcherPosition::setSecretaryshipDepartment(string secretaryshipDepartment) {
	this->secretaryshipDepartment = secretaryshipDepartment;
}

string ResearcherPosition::getSubject() const {
	return subject;
}

void ResearcherPosition::setSubject(string subject) {
	this->subject = subject;
}

string ResearcherPosition::ToJson(){
	string json="{ \"career\" : \""+ getCareer() + "\", \"id\" :\" "+ GetId() + "\", \"idDedication\" : \"" + getIdDedication() + "\", \"license\" : \"false\", \"modality\" : \"" + getModality() + "\", \"positionType\" :\" " + getPositionType() +"\", \"secretaryshipDepartment\" :\" "+ getSecretaryshipDepartment() + "\", \"subject\" : \"" + getSubject() + " \"}";
	return json;
}

ResearcherPosition::~ResearcherPosition() {
}

