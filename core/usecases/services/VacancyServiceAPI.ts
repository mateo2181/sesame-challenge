import { VacancyService } from "~/domain/services/VacancyService";
import { VacancyAPI } from "../adapters/VacancyAPI";

const vacancyService = new VacancyService(VacancyAPI);

export default vacancyService;