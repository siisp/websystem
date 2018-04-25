#include <iostream>
#include "ParserCSV/RecordsLoader.h"
#include <list>
#include "ParserCSV/Record.h"
#include "ParserCSV/ResearcherData.h"
#include "ParserCSV/FormationData.h"
#include "ParserCSV/PersonalData.h"
#include "ParserCSV/PositionData.h"
#include "DomainModel/Researcher.h"
#include "Mapper/ResearcherParser.h"
#define researcherFilePath "investigadores_depurados.csv"
using namespace std;
using std::list;

list<ResearcherData*>* GetResearchers() {
	list<ResearcherData*>* investigadores = new list<ResearcherData*>();
	RecordsLoader* loaderInvestigadores = new RecordsLoader();
	list<Record*>* records = loaderInvestigadores->GetRecords(researcherFilePath);
	list<Record*>::iterator iterador = records->begin();
	while (iterador != records->end()) {
		ResearcherData* data = new ResearcherData();
		data->setFormationData(new FormationData(*iterador));
		data->setPersonalData(new PersonalData(*iterador));
		data->setPositionData(new PositionData(*iterador));
		investigadores->push_back(data);
		iterador++;
	}
	return investigadores;
}

bool NosInteresaVerlo(int numero){
	if (numero == 4 or numero == 9 or numero == 274)return true;
	return false;
}

void ShowResearcher(Researcher* investigador,int numero){
	cout<<"Numero:"<<numero<<endl;
	cout<<"Nombre: "<<investigador->GetName()<<endl;
	cout<<"Apellido: "<<investigador->GetSurname()<<endl;
	cout<<"DNI: "<<investigador->GetDni()<<endl;
	cout<<"Genero: "<<investigador->GetGender()<<endl;
	cout<<"Email: "<<investigador->GetEmail()<<endl;
	cout<<"CUIL/CUIT: "<<investigador->GetCuilCuit()<<endl;
	cout<<endl;
}

list<Researcher*>* GetResearchers(list<ResearcherData*>* investigadoresDTO){
	list<Researcher*>* investigadores = new list<Researcher*>();
	list<ResearcherData*>::iterator iterador = investigadoresDTO->begin();
	ResearcherParser* parserInvestigadores = new ResearcherParser();
	int contador = 1;
	Researcher* algunResearcher;
	while(iterador != investigadoresDTO->end()){
		algunResearcher = (parserInvestigadores->Parse(*iterador));
		investigadores->push_back(algunResearcher);
		contador++;
		iterador++;
	}
	return investigadores;
}

void DestruirResearchers(list<Researcher*>* investigadores){
	list<Researcher*>::iterator iterador = investigadores->begin();
	while(iterador != investigadores->end()){
		delete *iterador;
		iterador++;
	}
}

void DestruirResearchersData(list<ResearcherData*>* researcherData){
	list<ResearcherData*>::iterator iterador = researcherData->begin();
	while(iterador != researcherData->end()){
		delete *iterador;
		iterador++;
	}
}

string GetJsonResearchers(list<Researcher*>* researchers){
	string researchersJson = "{";
	list<Researcher*>::iterator iterador = researchers->begin();
	int contador = 1;
	while(iterador != researchers->end()){
		researchersJson += (*iterador)->ToJson();
		if (contador != researchers->size())researchersJson+=",";
		contador++;
		iterador++;
	}
	researchersJson += "}";
	return researchersJson;
}

int main() {
	list<ResearcherData*>* investigadores = GetResearchers();
	list<Researcher*>* researchers = GetResearchers(investigadores);
	cout<<GetJsonResearchers(researchers);
	DestruirResearchers(researchers);
	DestruirResearchersData(investigadores);
	delete investigadores;
	delete researchers;
	return 0;
}
