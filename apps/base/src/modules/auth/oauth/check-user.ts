import type { Result } from "@rn-lab/types";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../../../utils/supabase";

export const checkUser = async (): Promise<Result<User, Error>> => {
	try {
		const {
			data: { session },
		} = await supabase.auth.getSession();

		if (!session?.user) {
			return {
				ok: false,
				error: new Error("No user in session"),
			};
		}

		return {
			ok: true,
			value: session?.user,
		};
	} catch (error) {
		return {
			ok: false,
			error: new Error("Error checking user session"),
		};
	}
};
