import * as CalcModels from '../model/CalculationModels'; 
import * as api from '../api/api';


export module CalculationService {
    export function OneA(model: CalcModels.OneAInputModel): Promise<CalcModels.OneAOutputModel> {

        return api.Get<CalcModels.OneAOutputModel>("/Calculation/OneA", model);
    }

    export function OneB(model: CalcModels.OneBInputModel): Promise<CalcModels.OneBOutputModel> {

        return api.Post<CalcModels.OneBOutputModel>("/Calculation/OneB", model);
    }

}