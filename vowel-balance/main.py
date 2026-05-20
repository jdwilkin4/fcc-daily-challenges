def is_balanced(s):
    vowels = set('aeiouAEIOU')
    middle_char = len(s) // 2
    first_half = s[0:middle_char]
    second_half = s[middle_char if len(s) % 2 == 0 else middle_char + 1:]

    def get_vowel_count(part):
        return sum(char in vowels for char in part)

    return get_vowel_count(first_half) == get_vowel_count(second_half)
