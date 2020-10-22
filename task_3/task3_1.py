dictionary = ['i', 'like', 'sam', 'sung', 'samsung', 'mobile', 'ice',
              'cream', 'icecream', 'man', 'go', 'mango']
answerCollection = []
string = input()


def search(newDict):
    index = 0
    wordFormed = ''
    previousBasket = []
    basket = newDict
    wordCollection = []
    successful = False
    isPossible = True

    for i, letter in enumerate(string):
        if isPossible:
            while not successful:
                basket = searchBasket(letter, basket, index)

                if len(basket) > 0:
                    index += 1
                    wordFormed += letter
                    previousBasket = basket
                    successful = True
                    if i == len(string)-1:
                        wordCollection.append(wordFormed)
                else:
                    if searchWordInBasket(wordFormed, previousBasket):
                        wordCollection.append(wordFormed)
                        index = 0
                        wordFormed = ''
                        basket = newDict
                        successful = False
                    else:
                        successful = True
                        isPossible = False
                        wordCollection = []
        else:
            wordCollection = []
        successful = False
    return wordCollection


def searchWordInBasket(word, basket1):
    for wd in basket1:
        if word == wd:
            return True
    return False


def searchBasket(letter, dict, i):
    subDict = []
    for word in dict:
        if len(word) > i:
            if letter == word[i]:
                subDict.append(word)
    return subDict


if len(string) == 1:
    print("ERROR: Invalid Input. Please input a string with more than one characters")
else:
    # first iteration
    wordFound = search(dictionary)

    if len(wordFound):
        answerCollection.append(wordFound)
        for w in wordFound:
            changedDict = dictionary.copy()
            changedDict.remove(w)
            wdFound = search(changedDict)
            if len(wdFound):
                answerCollection.append(wdFound)
        print('Yes')
        answerStringArray = []
        for answer in answerCollection:
            answerStringArray.append((' ').join(answer))
        print('The string can be segmented as "' +
              ('" or "').join(answerStringArray) + '"')
    else:
        print('No')
