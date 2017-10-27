################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/ParserCSV/Record.cpp \
../src/ParserCSV/RecordsLoader.cpp 

OBJS += \
./src/ParserCSV/Record.o \
./src/ParserCSV/RecordsLoader.o 

CPP_DEPS += \
./src/ParserCSV/Record.d \
./src/ParserCSV/RecordsLoader.d 


# Each subdirectory must supply rules for building sources it contributes
src/ParserCSV/%.o: ../src/ParserCSV/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


