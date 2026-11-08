import { compare_strings } from "../../evaluators/evaluators"
import { QuizBuilder } from "../../quiz"
import { DefaultQuizLayoutBuilder } from "../../defaultQuizLayout"
import { image_renderer } from "../../renderers/ImageRenderer"
import { DefaultCoordinator } from "../../TrainingCoordinator"
import { country_flags as answer_key } from "./country_flags"
import { AutofillEnumFetcher } from "../../response fetchers/autofill enum fetcher"


export const country_flags = new QuizBuilder({
	title: "Country Flags",
	answerKey: answer_key,
	coordinator: new DefaultCoordinator({
		evaluator: compare_strings,
		feedback: {
			correct: () => "Correct!",
			tryAgain: () => "Try again.",
			fail: () => "Incorrect."
		}
	}),
	layout: DefaultQuizLayoutBuilder({
		questionRenderer: image_renderer,
		responseFetcher: (props) => <AutofillEnumFetcher<string> {...props}/>,
	}),
	backgroundImage: "https://images.unsplash.com/photo-1534201041980-ab6cb6c36cc3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&q=80&w=1600"
})
