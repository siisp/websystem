#include <iostream>
#include "ParserCSV/RecordsLoader.h"
#include "ParserCSV/Record.h"
#include <list>
using namespace std;
const string path="/home/lasoladm/projects/migrationDB/websystem/MigrationDB/docentesInvestigadores.csv";

int main() {
	RecordsLoader* loader = new RecordsLoader();
	std::list<Record*> *records = loader->GetRecords(path);
	for(std::list<Record*>::iterator iterador=records->begin(); iterador!=records->end() ; ++iterador){
		Record* registro = *iterador;
		for (int x=0;x<registro->GetFieldCount();x++){
			cout<<"Campo numero: "<<x<<" "<<registro->GetField(x)<<endl;
		}
	}
	std::cout<<"La cantidad de registros que cargo es: "<<records->size()<<std::endl;
	return 0;
}
