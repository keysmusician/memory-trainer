import { QuizBuilder } from "../../quiz";
import { DefaultCoordinator } from "../../TrainingCoordinator";
import { PeriodicTable } from "./answer key";
import { PeriodicTableQuizLayout } from "./layout";


export const periodic_table = new QuizBuilder<
	number,
	PeriodicTable.Element,
	string,
	string
>({
	title: "Periodic Table",
	answerKey: PeriodicTable.answerKey,
	coordinator: new DefaultCoordinator({
		evaluator: (response, element) => response === element.name ? 1 : 0,
		feedback: {
			correct: () => "Correct!",
			tryAgain: () => "Try again.",
			fail: () => "Incorrect."
		}
	}),
	layout: PeriodicTableQuizLayout,
});
