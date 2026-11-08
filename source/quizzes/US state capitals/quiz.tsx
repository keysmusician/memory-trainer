import { compare_strings } from "../../evaluators/evaluators"
import { DefaultQuizLayoutBuilder } from "../../defaultQuizLayout"
import { QuizBuilder } from "../../quiz"
import { state_capital_text_renderer } from "../../renderers/StateCapitalTextRenderer"
import { EnumFetcher } from "../../response fetchers/enum fetcher"
import { DefaultCoordinator } from "../../TrainingCoordinator"
import { US_state_capitals as answer_key } from "./answer key"

export const us_state_capitals = new QuizBuilder<string, string, string, string>({
	title: "U.S. State Capitals",
	answerKey: answer_key,
	coordinator: new DefaultCoordinator({
		evaluator: compare_strings,
		feedback: {
			correct: () => "Correct!",
			tryAgain: () => "Try again.",
			fail: () => "Incorrect.",
		},
	}),
	layout: DefaultQuizLayoutBuilder<string, string, string, string>({
		questionRenderer: state_capital_text_renderer,
		responseFetcher: (props) => <EnumFetcher<string, string, string> {...props} sort />,
	}),
})
